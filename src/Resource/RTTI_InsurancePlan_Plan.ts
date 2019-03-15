
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_InsurancePlan_GeneralCost, IInsurancePlan_GeneralCost} from './RTTI_InsurancePlan_GeneralCost';
import {RTTI_InsurancePlan_SpecificCost, IInsurancePlan_SpecificCost} from './RTTI_InsurancePlan_SpecificCost';




            export interface IInsurancePlan_Plan {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * Type of plan. For example, "Platinum" or "High Deductable".
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * The geographic region in which a health insurance plan's benefits apply.
                     */
                    coverageArea? : IReference[];
                    

                    /**
                     * Reference to the network that providing the type of coverage.
                     */
                    network? : IReference[];
                    

                    /**
                     * Overall costs associated with the plan.
                     */
                    generalCost? : IInsurancePlan_GeneralCost[];
                    

                    /**
                     * Costs associated with the coverage provided by the product.
                     */
                    specificCost? : IInsurancePlan_SpecificCost[];
                    
            }
        


        export const RTTI_InsurancePlan_Plan: t.Type<IInsurancePlan_Plan> = t.recursion( 'IInsurancePlan_Plan', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
type: RTTI_CodeableConcept,
coverageArea: t.array(RTTI_Reference),
network: t.array(RTTI_Reference),
generalCost: t.array(RTTI_InsurancePlan_GeneralCost),
specificCost: t.array(RTTI_InsurancePlan_SpecificCost)
        })
        
        );
        

        