
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

export enum TestReport_AssertResultKind {
                pass = 'pass',
skip = 'skip',
fail = 'fail',
warning = 'warning',
error = 'error'
            }
const TestReport_AssertResultKindKeys = t.keyof({
                [TestReport_AssertResultKind.pass]: null,
[TestReport_AssertResultKind.skip]: null,
[TestReport_AssertResultKind.fail]: null,
[TestReport_AssertResultKind.warning]: null,
[TestReport_AssertResultKind.error]: null
            });


            export interface ITestReport_Assert {
                
                
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
                     * The result of this assertion.
                     */
                    result? : TestReport_AssertResultKind;
                    

                    /**
                     * Extensions for result
                     */
                    _result? : IElement;
                    

                    /**
                     * An explanatory message associated with the result.
                     */
                    message? : string;
                    

                    /**
                     * Extensions for message
                     */
                    _message? : IElement;
                    

                    /**
                     * A link to further details on the result.
                     */
                    detail? : string;
                    

                    /**
                     * Extensions for detail
                     */
                    _detail? : IElement;
                    
            }
        


        export const RTTI_TestReport_Assert: t.Type<ITestReport_Assert> = t.recursion( 'ITestReport_Assert', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
result: TestReport_AssertResultKindKeys,
_result: RTTI_Element,
message: t.string,
_message: RTTI_Element,
detail: t.string,
_detail: RTTI_Element
        })
        
        );
        

        