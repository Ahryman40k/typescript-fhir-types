
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        

        /**
         * A ValueSet resource instances specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). 
         */
        export class ValueSet_Parameter  {

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
                 * Name of the input parameter to the $expand operation; may be a server-assigned name for additional default or other server-supplied parameters used to control the expansion process.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * The value of the parameter.
                 */
                valueString? : string;
                

                /**
                 * Extensions for valueString
                 */
                _valueString? : Element;
                

                /**
                 * The value of the parameter.
                 */
                valueBoolean? : boolean;
                

                /**
                 * Extensions for valueBoolean
                 */
                _valueBoolean? : Element;
                

                /**
                 * The value of the parameter.
                 */
                valueInteger? : number;
                

                /**
                 * Extensions for valueInteger
                 */
                _valueInteger? : Element;
                

                /**
                 * The value of the parameter.
                 */
                valueDecimal? : number;
                

                /**
                 * Extensions for valueDecimal
                 */
                _valueDecimal? : Element;
                

                /**
                 * The value of the parameter.
                 */
                valueUri? : string;
                

                /**
                 * Extensions for valueUri
                 */
                _valueUri? : Element;
                

                /**
                 * The value of the parameter.
                 */
                valueCode? : string;
                

                /**
                 * Extensions for valueCode
                 */
                _valueCode? : Element;
                

                /**
                 * The value of the parameter.
                 */
                valueDateTime? : string;
                

                /**
                 * Extensions for valueDateTime
                 */
                _valueDateTime? : Element;
                
        }
        