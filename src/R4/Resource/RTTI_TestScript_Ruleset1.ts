
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_TestScript_Rule3, ITestScript_Rule3} from './RTTI_TestScript_Rule3';




            export interface ITestScript_Ruleset1 {
                
                
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
                     * The TestScript.ruleset id value this assert will evaluate.
                     */
                    rulesetId? : string;
                    

                    /**
                     * Extensions for rulesetId
                     */
                    _rulesetId? : IElement;
                    

                    /**
                     * The referenced rule within the external ruleset template.
                     */
                    rule? : ITestScript_Rule3[];
                    
            }
        


        export const RTTI_TestScript_Ruleset1: t.Type<ITestScript_Ruleset1> = t.recursion( 'ITestScript_Ruleset1', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
rulesetId: t.string,
_rulesetId: RTTI_Element,
rule: t.array(RTTI_TestScript_Rule3)
        })
        
        );
        

        