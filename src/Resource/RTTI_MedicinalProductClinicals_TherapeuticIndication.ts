
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_MedicinalProductClinicals_UndesirableEffects, IMedicinalProductClinicals_UndesirableEffects} from './RTTI_MedicinalProductClinicals_UndesirableEffects';
import {RTTI_MedicinalProductClinicals_OtherTherapy, IMedicinalProductClinicals_OtherTherapy} from './RTTI_MedicinalProductClinicals_OtherTherapy';
import {RTTI_MedicinalProductClinicals_Population, IMedicinalProductClinicals_Population} from './RTTI_MedicinalProductClinicals_Population';




            export interface IMedicinalProductClinicals_TherapeuticIndication {
                
                
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
                     * The disease, symptom or procedure that is the indication for treatment.
                     */
                    diseaseSymptomProcedure? : ICodeableConcept;
                    

                    /**
                     * The status of the disease or symptom for which the indication applies.
                     */
                    diseaseStatus? : ICodeableConcept;
                    

                    /**
                     * Comorbidity (concurrent condition) or co-infection as part of the indication.
                     */
                    comorbidity? : ICodeableConcept[];
                    

                    /**
                     * The intended effect, aim or strategy to be achieved by the indication.
                     */
                    intendedEffect? : ICodeableConcept;
                    

                    /**
                     * Timing or duration information as part of the indication.
                     */
                    duration? : IQuantity;
                    

                    /**
                     * Information about the use of the medicinal product in relation to other therapies as part of the indication.
                     */
                    undesirableEffects? : IMedicinalProductClinicals_UndesirableEffects[];
                    

                    /**
                     * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
                     */
                    otherTherapy? : IMedicinalProductClinicals_OtherTherapy[];
                    

                    /**
                     * The population group to which this applies.
                     */
                    population? : IMedicinalProductClinicals_Population[];
                    
            }
        


        export const RTTI_MedicinalProductClinicals_TherapeuticIndication: t.Type<IMedicinalProductClinicals_TherapeuticIndication> = t.recursion( 'IMedicinalProductClinicals_TherapeuticIndication', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
diseaseSymptomProcedure: RTTI_CodeableConcept,
diseaseStatus: RTTI_CodeableConcept,
comorbidity: t.array(RTTI_CodeableConcept),
intendedEffect: RTTI_CodeableConcept,
duration: RTTI_Quantity,
undesirableEffects: t.array(RTTI_MedicinalProductClinicals_UndesirableEffects),
otherTherapy: t.array(RTTI_MedicinalProductClinicals_OtherTherapy),
population: t.array(RTTI_MedicinalProductClinicals_Population)
        })
        
        );
        

        