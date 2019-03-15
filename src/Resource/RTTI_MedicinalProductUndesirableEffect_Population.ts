
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';




            export interface IMedicinalProductUndesirableEffect_Population {
                
                
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
                     * The age of the specific population.
                     */
                    ageRange? : IRange;
                    

                    /**
                     * The age of the specific population.
                     */
                    ageCodeableConcept? : ICodeableConcept;
                    

                    /**
                     * The gender of the specific population.
                     */
                    gender? : ICodeableConcept;
                    

                    /**
                     * Race of the specific population.
                     */
                    race? : ICodeableConcept;
                    

                    /**
                     * The existing physiological conditions of the specific population to which this applies.
                     */
                    physiologicalCondition? : ICodeableConcept;
                    
            }
        


        export const RTTI_MedicinalProductUndesirableEffect_Population: t.Type<IMedicinalProductUndesirableEffect_Population> = t.recursion( 'IMedicinalProductUndesirableEffect_Population', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
ageRange: RTTI_Range,
ageCodeableConcept: RTTI_CodeableConcept,
gender: RTTI_CodeableConcept,
race: RTTI_CodeableConcept,
physiologicalCondition: RTTI_CodeableConcept
        })
        
        );
        

        