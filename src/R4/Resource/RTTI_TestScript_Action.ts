
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_TestScript_Operation, ITestScript_Operation} from './RTTI_TestScript_Operation';
import {RTTI_TestScript_Assert, ITestScript_Assert} from './RTTI_TestScript_Assert';




            export interface ITestScript_Action {
                
                
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
                     * The operation to perform.
                     */
                    operation? : ITestScript_Operation;
                    

                    /**
                     * Evaluates the results of previous operations to determine if the server under test behaves appropriately.
                     */
                    assert? : ITestScript_Assert;
                    
            }
        


        export const RTTI_TestScript_Action: t.Type<ITestScript_Action> = t.recursion( 'ITestScript_Action', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
operation: RTTI_TestScript_Operation,
assert: RTTI_TestScript_Assert
        })
        
        );
        

        