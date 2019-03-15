
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface IExplanationOfBenefit_Adjudication {
                
                    /**
                     * Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.
                     */
                    category : ICodeableConcept;
                    
                
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
                     * Adjudication reason such as limit reached.
                     */
                    reason? : ICodeableConcept;
                    

                    /**
                     * Monitory amount associated with the code.
                     */
                    amount? : IMoney;
                    

                    /**
                     * A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
                     */
                    value? : number;
                    

                    /**
                     * Extensions for value
                     */
                    _value? : IElement;
                    
            }
        


        export const RTTI_ExplanationOfBenefit_Adjudication: t.Type<IExplanationOfBenefit_Adjudication> = t.recursion( 'IExplanationOfBenefit_Adjudication', () =>
            t.intersection([
                
        t.type({
           category: RTTI_CodeableConcept
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
reason: RTTI_CodeableConcept,
amount: RTTI_Money,
value: t.number,
_value: RTTI_Element
        })
        
            ])
        );
        

        