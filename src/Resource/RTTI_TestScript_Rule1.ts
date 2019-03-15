
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_TestScript_Param1, ITestScript_Param1} from './RTTI_TestScript_Param1';




            export interface ITestScript_Rule1 {
                
                
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
                     * Id of the referenced rule within the external ruleset template.
                     */
                    ruleId? : string;
                    

                    /**
                     * Extensions for ruleId
                     */
                    _ruleId? : IElement;
                    

                    /**
                     * Each rule template can take one or more parameters for rule evaluation.
                     */
                    param? : ITestScript_Param1[];
                    
            }
        


        export const RTTI_TestScript_Rule1: t.Type<ITestScript_Rule1> = t.recursion( 'ITestScript_Rule1', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
ruleId: t.string,
_ruleId: RTTI_Element,
param: t.array(RTTI_TestScript_Param1)
        })
        
        );
        

        