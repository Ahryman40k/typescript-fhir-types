
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';

        export enum EpisodeOfCareStatusHistoryStatusKind {
                planned,
waitlist,
active,
onhold,
finished,
cancelled,
enteredInError
            }

        /**
         * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. 
         */
        export class EpisodeOfCare_StatusHistory  {

            constructor() {
                this.period = new Period();
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
                 * planned | waitlist | active | onhold | finished | cancelled.
                 */
                status? : EpisodeOfCareStatusHistoryStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The period during this EpisodeOfCare that the specific status applied.
                 */
                period : Period;
                
        }
        