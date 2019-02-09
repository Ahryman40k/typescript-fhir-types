
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';
import { PositiveInt } from '../Scalar/PositiveInt';

        export enum ContactPointSystemKind {
                phone,
fax,
email,
pager,
url,
sms,
other
            }
export enum ContactPointUseKind {
                home,
work,
temp,
old,
mobile
            }

        /**
         * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. 
         */
        export class ContactPoint  {

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
                 * Telecommunications form for contact point - what communications system is required to make use of the contact.
                 */
                system? : ContactPointSystemKind;
                

                /**
                 * Extensions for system
                 */
                _system? : Element;
                

                /**
                 * The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).
                 */
                value? : string;
                

                /**
                 * Extensions for value
                 */
                _value? : Element;
                

                /**
                 * Identifies the purpose for the contact point.
                 */
                use? : ContactPointUseKind;
                

                /**
                 * Extensions for use
                 */
                _use? : Element;
                

                /**
                 * Specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.
                 */
                rank? : PositiveInt;
                

                /**
                 * Extensions for rank
                 */
                _rank? : Element;
                

                /**
                 * Time period when the contact point was/is in use.
                 */
                period? : Period;
                
        }
        