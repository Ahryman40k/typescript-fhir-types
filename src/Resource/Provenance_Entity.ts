
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Provenance_Agent } from '../Resource/Provenance_Agent';
import { Reference } from '../Resource/Reference';

        export enum ProvenanceEntityRoleKind {
                derivation,
revision,
quotation,
source,
removal
            }

        /**
         * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies. 
         */
        export class Provenance_Entity  {

            constructor() {
                this.what = new Reference();
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
                 * How the entity was used during the activity.
                 */
                role? : ProvenanceEntityRoleKind;
                

                /**
                 * Extensions for role
                 */
                _role? : Element;
                

                /**
                 * Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
                 */
                what : Reference;
                

                /**
                 * The entity is attributed to an agent to express the agent's responsibility for that entity, possibly along with other agents. This description can be understood as shorthand for saying that the agent was responsible for the activity which generated the entity.
                 */
                agent? : Provenance_Agent[];
                
        }
        