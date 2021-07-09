import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
export enum ExampleScenario_ActorTypeKind {
  _person = 'person',
  _entity = 'entity',
}
import {createEnumType} from '../../EnumType';

export interface IExampleScenario_Actor {
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
   * ID or acronym of actor.
   */
  actorId?: string;

  /**
   * Extensions for actorId
   */
  _actorId?: IElement;

  /**
   * The type of actor - person or system.
   */
  type?: ExampleScenario_ActorTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The name of the actor as shown in the page.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * The description of the actor.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;
}

export const RTTI_ExampleScenario_Actor: t.Type<IExampleScenario_Actor> =
  t.recursion('IExampleScenario_Actor', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      actorId: t.string,
      _actorId: RTTI_Element,
      type: createEnumType<ExampleScenario_ActorTypeKind>(
        ExampleScenario_ActorTypeKind,
        'ExampleScenario_ActorTypeKind',
      ),
      _type: RTTI_Element,
      name: t.string,
      _name: RTTI_Element,
      description: RTTI_markdown,
      _description: RTTI_Element,
    }),
  );
