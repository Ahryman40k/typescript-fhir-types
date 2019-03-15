
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Measure_Population, IMeasure_Population} from './RTTI_Measure_Population';
import {RTTI_Measure_Stratifier, IMeasure_Stratifier} from './RTTI_Measure_Stratifier';




            export interface IMeasure_Group {
                
                
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
                     * Indicates a meaning for the group. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing groups to be correlated across measures.
                     */
                    code? : ICodeableConcept;
                    

                    /**
                     * The human readable description of this population group.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * A population criteria for the measure.
                     */
                    population? : IMeasure_Population[];
                    

                    /**
                     * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.
                     */
                    stratifier? : IMeasure_Stratifier[];
                    
            }
        


        export const RTTI_Measure_Group: t.Type<IMeasure_Group> = t.recursion( 'IMeasure_Group', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: RTTI_CodeableConcept,
description: t.string,
_description: RTTI_Element,
population: t.array(RTTI_Measure_Population),
stratifier: t.array(RTTI_Measure_Stratifier)
        })
        
        );
        

        