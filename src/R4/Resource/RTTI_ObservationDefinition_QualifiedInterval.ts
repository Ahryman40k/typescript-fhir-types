
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface IObservationDefinition_QualifiedInterval {
                
                
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
                     * The category or type of interval.
                     */
                    category? : ICodeableConcept;
                    

                    /**
                     * The value and associated unit of the low bound (inclusive) of the reference range.
                     */
                    range? : IRange;
                    

                    /**
                     * Codes to indicate what part of the targeted reference population it applies to. For example, the normal or therapeutic range.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * Codes to indicate the target population this reference range applies to.
                     */
                    appliesTo? : ICodeableConcept[];
                    

                    /**
                     * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
                     */
                    age? : IRange;
                    

                    /**
                     * The gestational age at which this reference range is applicable, in the context of pregnancy.
                     */
                    gestationalAge? : IRange;
                    

                    /**
                     * Text based condition for which the reference range is valid.
                     */
                    condition? : string;
                    

                    /**
                     * Extensions for condition
                     */
                    _condition? : IElement;
                    
            }
        


        export const RTTI_ObservationDefinition_QualifiedInterval: t.Type<IObservationDefinition_QualifiedInterval> = t.recursion( 'IObservationDefinition_QualifiedInterval', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
category: RTTI_CodeableConcept,
range: RTTI_Range,
type: RTTI_CodeableConcept,
appliesTo: t.array(RTTI_CodeableConcept),
age: RTTI_Range,
gestationalAge: RTTI_Range,
condition: t.string,
_condition: RTTI_Element
        })
        
        );
        

        