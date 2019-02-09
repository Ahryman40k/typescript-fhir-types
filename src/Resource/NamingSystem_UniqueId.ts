
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';

        export enum NamingSystemUniqueIdTypeKind {
                oid,
uuid,
uri,
other
            }

        /**
         * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. 
         */
        export class NamingSystem_UniqueId  {

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
                 * Identifies the unique identifier scheme used for this particular identifier.
                 */
                type? : NamingSystemUniqueIdTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * The string that should be sent over the wire to identify the code system or identifier system.
                 */
                value? : string;
                

                /**
                 * Extensions for value
                 */
                _value? : Element;
                

                /**
                 * Indicates whether this identifier is the "preferred" identifier of this type.
                 */
                preferred? : boolean;
                

                /**
                 * Extensions for preferred
                 */
                _preferred? : Element;
                

                /**
                 * Notes about the past or intended usage of this identifier.
                 */
                comment? : string;
                

                /**
                 * Extensions for comment
                 */
                _comment? : Element;
                

                /**
                 * Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic.
                 */
                period? : Period;
                
        }
        