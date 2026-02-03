import * as React from "react";

// Basic toast hook adapted for client usage
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

type ToastAction =
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> & { id: string } }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: actionTypes.REMOVE_TOAST, toastId });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
}

const [state, dispatch] = React.useReducer((state: { toasts: ToasterToast[] }, action: ToastAction) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST: {
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    }
    case actionTypes.UPDATE_TOAST: {
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };
    }
    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;

      // If no id, dismiss all toasts
      if (!toastId) {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      } else {
        addToRemoveQueue(toastId);
      }

      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === toastId || toastId === undefined ? { ...t } : t)),
      };
    }
    case actionTypes.REMOVE_TOAST: {
      if (action.toastId === undefined) {
        return { ...state, toasts: [] };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    }
    default:
      return state;
  }
},
{ toasts: [] });

const listeners: Array<(state: { toasts: ToasterToast[] }) => void> = [];

function toast({ title, description, action }: Omit<ToasterToast, "id">) {
  const id = genId();

  const update = (toast: ToasterToast) =>
    dispatch({ type: actionTypes.UPDATE_TOAST, toast: { ...toast, id } });
  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      id,
      title,
      description,
      action,
    },
  });

  return {
    id,
    dismiss,
    update,
  };
}

function useToast() {
  const [localState, setLocalState] = React.useState<{ toasts: ToasterToast[] }>(() => state);

  React.useEffect(() => {
    listeners.push(setLocalState);
    return () => {
      const index = listeners.indexOf(setLocalState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    ...localState,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  };
}

export { useToast, toast };
