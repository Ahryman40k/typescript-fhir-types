
        import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Range } from '../Resource/Range';

        export enum PlanDefinition_RelatedActionRelationshipKind {
                beforeStart,
before,
beforeEnd,
concurrentWithStart,
concurrent,
concurrentWithEnd,
afterStart,
after,
afterEnd
            }

        /**
         * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. 
         */
        export class PlanDefinition_RelatedAction  {

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
                 * The element id of the related action.
                 */
                ActionId? : Id;
                

                /**
                 * Extensions for actionId
                 */
                _actionId? : Element;
                

                /**
                 * The relationship of this action to the related action.
                 */
                Relationship? : PlanDefinition_RelatedActionRelationshipKind;
                

                /**
                 * Extensions for relationship
                 */
                _relationship? : Element;
                

                /**
                 * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
                 */
                OffsetDuration? : Duration;
                

                /**
                 * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
                 */
                OffsetRange? : Range;
                
        }
        