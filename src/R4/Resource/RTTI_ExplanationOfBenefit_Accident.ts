
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_Reference, IReference} from './RTTI_Reference';




            export interface IExplanationOfBenefit_Accident {
                
                
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
                     * Date of an accident which these services are addressing.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * Type of accident: work, auto, etc.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * Where the accident occurred.
                     */
                    locationAddress? : IAddress;
                    

                    /**
                     * Where the accident occurred.
                     */
                    locationReference? : IReference;
                    
            }
        


        export const RTTI_ExplanationOfBenefit_Accident: t.Type<IExplanationOfBenefit_Accident> = t.recursion( 'IExplanationOfBenefit_Accident', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
date: t.string,
_date: RTTI_Element,
type: RTTI_CodeableConcept,
locationAddress: RTTI_Address,
locationReference: RTTI_Reference
        })
        
        );
        

        