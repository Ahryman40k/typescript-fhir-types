
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';

        

        /**
         * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. 
         */
        export class TestScript_Variable  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Descriptive name for this variable.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A default, hard-coded, or user-defined value for this variable.
                 */
                defaultValue? : string;
                

                /**
                 * Extensions for defaultValue
                 */
                _defaultValue? : Element;
                

                /**
                 * A free text natural language description of the variable and its purpose.
                 */
                description? : string;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The FHIRPath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified.
                 */
                expression? : string;
                

                /**
                 * Extensions for expression
                 */
                _expression? : Element;
                

                /**
                 * Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
                 */
                headerField? : string;
                

                /**
                 * Extensions for headerField
                 */
                _headerField? : Element;
                

                /**
                 * Displayable text string with hint help information to the user when entering a default value.
                 */
                hint? : string;
                

                /**
                 * Extensions for hint
                 */
                _hint? : Element;
                

                /**
                 * XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified.
                 */
                path? : string;
                

                /**
                 * Extensions for path
                 */
                _path? : Element;
                

                /**
                 * Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.
                 */
                sourceId? : Id;
                

                /**
                 * Extensions for sourceId
                 */
                _sourceId? : Element;
                
        }
        