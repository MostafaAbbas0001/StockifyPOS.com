"use client";

import AnimatedSection from "@/components/AnimatedSection";

const Implementation = () => {
  return (
    <section className="section-container section-padding border-t border-border">
      <AnimatedSection direction="up">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Implementation and Support
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Stockify POS is installed on customer hardware at your premises. 
              The implementation process follows a defined sequence from initial 
              scoping through go-live and post-deployment support.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Onboarding</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Technical staff conduct site assessment, install the software, 
                configure hardware connections, and train designated users. 
                Standard deployments complete within two weeks.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Data Migration</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Existing product catalogs, supplier lists, and customer records 
                are imported through structured templates. Historical data 
                transfer is scoped during project planning.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Reliability</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                On-premise installation means operations continue during internet 
                outages. Local data storage provides full access to transaction 
                history and inventory records at all times.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Support Model</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Direct support is available via email and phone during business 
                hours. Critical issues receive same-day response. Software updates 
                are scheduled during low-traffic periods.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Implementation;
