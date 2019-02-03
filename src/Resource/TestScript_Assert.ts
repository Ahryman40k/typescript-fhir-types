
        import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { TestScript_Rule2 } from '../Resource/TestScript_Rule2';
import { TestScript_Ruleset1 } from '../Resource/TestScript_Ruleset1';

        export enum TestScript_AssertDirectionKind {
                response,
request
            }
export enum TestScript_AssertOperatorKind {
                equals,
notEquals,
in,
notIn,
greaterThan,
lessThan,
empty,
notEmpty,
contains,
notContains,
eval
            }
export enum TestScript_AssertRequestMethodKind {
                delete,
get,
options,
patch,
post,
put
            }
export enum TestScript_AssertResponseKind {
                okay,
created,
noContent,
notModified,
bad,
forbidden,
notFound,
methodNotAllowed,
conflict,
gone,
preconditionFailed,
unprocessable
            }

        /**
         * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. 
         */
        export class TestScript_Assert  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * The label would be used for tracking/logging purposes by test engines.
                 */
                Label? : String;
                

                /**
                 * Extensions for label
                 */
                _label? : Element;
                

                /**
                 * The description would be used by test engines for tracking and reporting purposes.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The direction to use for the assertion.
                 */
                Direction? : TestScript_AssertDirectionKind;
                

                /**
                 * Extensions for direction
                 */
                _direction? : Element;
                

                /**
                 * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
                 */
                CompareToSourceId? : String;
                

                /**
                 * Extensions for compareToSourceId
                 */
                _compareToSourceId? : Element;
                

                /**
                 * The FHIRPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
                 */
                CompareToSourceExpression? : String;
                

                /**
                 * Extensions for compareToSourceExpression
                 */
                _compareToSourceExpression? : Element;
                

                /**
                 * XPath or JSONPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
                 */
                CompareToSourcePath? : String;
                

                /**
                 * Extensions for compareToSourcePath
                 */
                _compareToSourcePath? : Element;
                

                /**
                 * The mime-type contents to compare against the request or response message 'Content-Type' header.
                 */
                ContentType? : Code;
                

                /**
                 * Extensions for contentType
                 */
                _contentType? : Element;
                

                /**
                 * The FHIRPath expression to be evaluated against the request or response message contents - HTTP headers and payload.
                 */
                Expression? : String;
                

                /**
                 * Extensions for expression
                 */
                _expression? : Element;
                

                /**
                 * The HTTP header field name e.g. 'Location'.
                 */
                HeaderField? : String;
                

                /**
                 * Extensions for headerField
                 */
                _headerField? : Element;
                

                /**
                 * The ID of a fixture.  Asserts that the response contains at a minimum the fixture specified by minimumId.
                 */
                MinimumId? : String;
                

                /**
                 * Extensions for minimumId
                 */
                _minimumId? : Element;
                

                /**
                 * Whether or not the test execution performs validation on the bundle navigation links.
                 */
                NavigationLinks? : Boolean;
                

                /**
                 * Extensions for navigationLinks
                 */
                _navigationLinks? : Element;
                

                /**
                 * The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
                 */
                Operator? : TestScript_AssertOperatorKind;
                

                /**
                 * Extensions for operator
                 */
                _operator? : Element;
                

                /**
                 * The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
                 */
                Path? : String;
                

                /**
                 * Extensions for path
                 */
                _path? : Element;
                

                /**
                 * The request method or HTTP operation code to compare against that used by the client system under test.
                 */
                RequestMethod? : TestScript_AssertRequestMethodKind;
                

                /**
                 * Extensions for requestMethod
                 */
                _requestMethod? : Element;
                

                /**
                 * The value to use in a comparison against the request URL path string.
                 */
                RequestURL? : String;
                

                /**
                 * Extensions for requestURL
                 */
                _requestURL? : Element;
                

                /**
                 * The type of the resource.  See http://build.fhir.org/resourcelist.html.
                 */
                Resource? : Code;
                

                /**
                 * Extensions for resource
                 */
                _resource? : Element;
                

                /**
                 * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
                 */
                Response? : TestScript_AssertResponseKind;
                

                /**
                 * Extensions for response
                 */
                _response? : Element;
                

                /**
                 * The value of the HTTP response code to be tested.
                 */
                ResponseCode? : String;
                

                /**
                 * Extensions for responseCode
                 */
                _responseCode? : Element;
                

                /**
                 * The TestScript.rule this assert will evaluate.
                 */
                Rule? : TestScript_Rule2;
                

                /**
                 * The TestScript.ruleset this assert will evaluate.
                 */
                Ruleset? : TestScript_Ruleset1;
                

                /**
                 * Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
                 */
                SourceId? : Id;
                

                /**
                 * Extensions for sourceId
                 */
                _sourceId? : Element;
                

                /**
                 * The ID of the Profile to validate against.
                 */
                ValidateProfileId? : Id;
                

                /**
                 * Extensions for validateProfileId
                 */
                _validateProfileId? : Element;
                

                /**
                 * The value to compare to.
                 */
                Value? : String;
                

                /**
                 * Extensions for value
                 */
                _value? : Element;
                

                /**
                 * Whether or not the test execution will produce a warning only on error for this assert.
                 */
                WarningOnly? : Boolean;
                

                /**
                 * Extensions for warningOnly
                 */
                _warningOnly? : Element;
                
        }
        