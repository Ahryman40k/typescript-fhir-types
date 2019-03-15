
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Money, IMoney} from './RTTI_Money';




            export interface IExplanationOfBenefit_Financial {
                
                    /**
                     * Deductable, visits, benefit amount.
                     */
                    type : ICodeableConcept;
                    
                
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
                     * Benefits allowed.
                     */
                    allowedUnsignedInt? : number;
                    

                    /**
                     * Extensions for allowedUnsignedInt
                     */
                    _allowedUnsignedInt? : IElement;
                    

                    /**
                     * Benefits allowed.
                     */
                    allowedString? : string;
                    

                    /**
                     * Extensions for allowedString
                     */
                    _allowedString? : IElement;
                    

                    /**
                     * Benefits allowed.
                     */
                    allowedMoney? : IMoney;
                    

                    /**
                     * Benefits used.
                     */
                    usedUnsignedInt? : number;
                    

                    /**
                     * Extensions for usedUnsignedInt
                     */
                    _usedUnsignedInt? : IElement;
                    

                    /**
                     * Benefits used.
                     */
                    usedMoney? : IMoney;
                    
            }
        


        export const RTTI_ExplanationOfBenefit_Financial: t.Type<IExplanationOfBenefit_Financial> = t.recursion( 'IExplanationOfBenefit_Financial', () =>
            t.intersection([
                
        t.type({
           type: RTTI_CodeableConcept
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
allowedUnsignedInt: t.number,
_allowedUnsignedInt: RTTI_Element,
allowedString: t.string,
_allowedString: RTTI_Element,
allowedMoney: RTTI_Money,
usedUnsignedInt: t.number,
_usedUnsignedInt: RTTI_Element,
usedMoney: RTTI_Money
        })
        
            ])
        );
        

        