
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MedicinalProductClinicals_Population, IMedicinalProductClinicals_Population} from './RTTI_MedicinalProductClinicals_Population';




            export interface IMedicinalProductClinicals_UndesirableEffects {
                
                
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
                     * The symptom, condition or undesirable effect.
                     */
                    symptomConditionEffect? : ICodeableConcept;
                    

                    /**
                     * Classification of the effect.
                     */
                    classification? : ICodeableConcept;
                    

                    /**
                     * The frequency of occurrence of the effect.
                     */
                    frequencyOfOccurrence? : ICodeableConcept;
                    

                    /**
                     * The population group to which this applies.
                     */
                    population? : IMedicinalProductClinicals_Population[];
                    
            }
        


        export const RTTI_MedicinalProductClinicals_UndesirableEffects: t.Type<IMedicinalProductClinicals_UndesirableEffects> = t.recursion( 'IMedicinalProductClinicals_UndesirableEffects', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
symptomConditionEffect: RTTI_CodeableConcept,
classification: RTTI_CodeableConcept,
frequencyOfOccurrence: RTTI_CodeableConcept,
population: t.array(RTTI_MedicinalProductClinicals_Population)
        })
        
        );
        

        