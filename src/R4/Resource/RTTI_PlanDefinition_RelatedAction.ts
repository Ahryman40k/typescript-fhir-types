import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Duration, IDuration} from './RTTI_Duration';
import {RTTI_Range, IRange} from './RTTI_Range';
export enum PlanDefinition_RelatedActionRelationshipKind {
  _beforeStart = 'before-start',
  _before = 'before',
  _beforeEnd = 'before-end',
  _concurrentWithStart = 'concurrent-with-start',
  _concurrent = 'concurrent',
  _concurrentWithEnd = 'concurrent-with-end',
  _afterStart = 'after-start',
  _after = 'after',
  _afterEnd = 'after-end',
}
import {createEnumType} from '../../EnumType';

export interface IPlanDefinition_RelatedAction {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * The element id of the related action.
   */
  actionId?: string;

  /**
   * Extensions for actionId
   */
  _actionId?: IElement;

  /**
   * The relationship of this action to the related action.
   */
  relationship?: PlanDefinition_RelatedActionRelationshipKind;

  /**
   * Extensions for relationship
   */
  _relationship?: IElement;

  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  offsetDuration?: IDuration;

  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  offsetRange?: IRange;
}

export const RTTI_PlanDefinition_RelatedAction: t.Type<IPlanDefinition_RelatedAction> =
  t.recursion('IPlanDefinition_RelatedAction', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      actionId: RTTI_id,
      _actionId: RTTI_Element,
      relationship:
        createEnumType<PlanDefinition_RelatedActionRelationshipKind>(
          PlanDefinition_RelatedActionRelationshipKind,
          'PlanDefinition_RelatedActionRelationshipKind',
        ),
      _relationship: RTTI_Element,
      offsetDuration: RTTI_Duration,
      offsetRange: RTTI_Range,
    }),
  );
