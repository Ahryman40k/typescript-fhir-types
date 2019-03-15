
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Duration, IDuration} from './RTTI_Duration';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface ISpecimenDefinition_Handling {
                
                
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
                     * Code representing the set of handling instructions.
                     */
                    conditionSet? : ICodeableConcept;
                    

                    /**
                     * The temperature interval for this set of handling instructions.
                     */
                    tempRange? : IRange;
                    

                    /**
                     * The maximum time interval of conservation of the specimen with these conditions.
                     */
                    maxDuration? : IDuration;
                    

                    /**
                     * Textual instructions regarding the light exposure of the specimen prior testing.
                     */
                    lightExposure? : string;
                    

                    /**
                     * Extensions for lightExposure
                     */
                    _lightExposure? : IElement;
                    

                    /**
                     * Additional textual instructions for the conservation or transport of the specimen.
                     */
                    instruction? : string;
                    

                    /**
                     * Extensions for instruction
                     */
                    _instruction? : IElement;
                    
            }
        


        export const RTTI_SpecimenDefinition_Handling: t.Type<ISpecimenDefinition_Handling> = t.recursion( 'ISpecimenDefinition_Handling', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
conditionSet: RTTI_CodeableConcept,
tempRange: RTTI_Range,
maxDuration: RTTI_Duration,
lightExposure: t.string,
_lightExposure: RTTI_Element,
instruction: t.string,
_instruction: RTTI_Element
        })
        
        );
        

        