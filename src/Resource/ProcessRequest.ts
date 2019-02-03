
        import { Code } from '../Scalar/Code';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { ProcessRequest_Item } from '../Resource/ProcessRequest_Item';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum ProcessRequestActionKind {
                cancel,
poll,
reprocess,
status
            }

        /**
         * This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources. 
         */
        export class ProcessRequest  {

            constructor() {
                
            }

            
                /**
                 * This is a ProcessRequest resource
                 */
                ResourceType: string = 'ProcessRequest;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * The ProcessRequest business identifier.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The status of the resource instance.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The type of processing action being requested, for example Reversal, Readjudication, StatusRequest, PendedRequest.
                 */
                Action? : ProcessRequestActionKind;
                

                /**
                 * Extensions for action
                 */
                _action? : Element;
                

                /**
                 * The organization which is the target of the request.
                 */
                Target? : Reference;
                

                /**
                 * The date when this resource was created.
                 */
                Created? : DateTime;
                

                /**
                 * Extensions for created
                 */
                _created? : Element;
                

                /**
                 * The practitioner who is responsible for the action specified in this request.
                 */
                Provider? : Reference;
                

                /**
                 * Reference of resource which is the target or subject of this action.
                 */
                Request? : Reference;
                

                /**
                 * Reference of a prior response to resource which is the target or subject of this action.
                 */
                Response? : Reference;
                

                /**
                 * If true remove all history excluding audit.
                 */
                Nullify? : Boolean;
                

                /**
                 * Extensions for nullify
                 */
                _nullify? : Element;
                

                /**
                 * A reference to supply which authenticates the process.
                 */
                Reference? : String;
                

                /**
                 * Extensions for reference
                 */
                _reference? : Element;
                

                /**
                 * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
                 */
                Item? : Array<ProcessRequest_Item>;
                

                /**
                 * Names of resource types to include.
                 */
                Include? : Array<String>;
                

                /**
                 * Extensions for include
                 */
                _include? : Array<Element>;
                

                /**
                 * Names of resource types to exclude.
                 */
                Exclude? : Array<String>;
                

                /**
                 * Extensions for exclude
                 */
                _exclude? : Array<Element>;
                

                /**
                 * A period of time during which the fulfilling resources would have been created.
                 */
                Period? : Period;
                
        }
        