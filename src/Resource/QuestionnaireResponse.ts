
        import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { QuestionnaireResponse_Item } from '../Resource/QuestionnaireResponse_Item';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum QuestionnaireResponseStatusKind {
                inProgress,
completed,
amended,
enteredInError,
stopped
            }

        /**
         * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. 
         */
        export class QuestionnaireResponse  {

            constructor() {
                
            }

            
                /**
                 * This is a QuestionnaireResponse resource
                 */
                ResourceType: string = 'QuestionnaireResponse;'
                

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
                 * A business identifier assigned to a particular completed (or partially completed) questionnaire.
                 */
                Identifier? : Identifier;
                

                /**
                 * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
                 */
                BasedOn? : Array<Reference>;
                

                /**
                 * A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.
                 */
                PartOf? : Array<Reference>;
                

                /**
                 * The Questionnaire that defines and organizes the questions for which answers are being provided.
                 */
                Questionnaire? : Canonical;
                

                /**
                 * The position of the questionnaire response within its overall lifecycle.
                 */
                Status? : QuestionnaireResponseStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.
                 */
                Subject? : Reference;
                

                /**
                 * The encounter or episode of care with primary association to the questionnaire response.
                 */
                Context? : Reference;
                

                /**
                 * The date and/or time that this set of answers were last changed.
                 */
                Authored? : DateTime;
                

                /**
                 * Extensions for authored
                 */
                _authored? : Element;
                

                /**
                 * Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
                 */
                Author? : Reference;
                

                /**
                 * The person who answered the questions about the subject.
                 */
                Source? : Reference;
                

                /**
                 * A group or question item from the original questionnaire for which answers are provided.
                 */
                Item? : Array<QuestionnaireResponse_Item>;
                
        }
        