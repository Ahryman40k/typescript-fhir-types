
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';




            export interface ICoverage_Copay {
                
                    /**
                     * The amount of patient payments for various types of services/products, expressed as a percentage of the service/product cost or a fixed amount of currency.
                     */
                    value : IQuantity;
                    
                
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
                     * Types of products or services such as visit, specialist visits, emergency, inpatient care, etc.
                     */
                    type? : ICoding;
                    
            }
        


        export const RTTI_Coverage_Copay: t.Type<ICoverage_Copay> = t.recursion( 'ICoverage_Copay', () =>
            t.intersection([
                
        t.type({
           value: RTTI_Quantity
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_Coding
        })
        
            ])
        );
        

        