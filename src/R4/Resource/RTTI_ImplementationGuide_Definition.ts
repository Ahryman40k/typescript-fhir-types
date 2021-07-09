import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {
  RTTI_ImplementationGuide_Grouping,
  IImplementationGuide_Grouping,
} from './RTTI_ImplementationGuide_Grouping';
import {
  RTTI_ImplementationGuide_Resource,
  IImplementationGuide_Resource,
} from './RTTI_ImplementationGuide_Resource';
import {
  RTTI_ImplementationGuide_Page,
  IImplementationGuide_Page,
} from './RTTI_ImplementationGuide_Page';
import {
  RTTI_ImplementationGuide_Parameter,
  IImplementationGuide_Parameter,
} from './RTTI_ImplementationGuide_Parameter';
import {
  RTTI_ImplementationGuide_Template,
  IImplementationGuide_Template,
} from './RTTI_ImplementationGuide_Template';

export interface IImplementationGuide_Definition {
  /**
   * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
   */
  resource: IImplementationGuide_Resource[];

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
   * A logical group of resources. Logical groups can be used when building pages.
   */
  grouping?: IImplementationGuide_Grouping[];

  /**
   * A page / section in the implementation guide. The root page is the implementation guide home page.
   */
  page?: IImplementationGuide_Page;

  /**
   * Defines how IG is built by tools.
   */
  parameter?: IImplementationGuide_Parameter[];

  /**
   * A template for building resources.
   */
  template?: IImplementationGuide_Template[];
}

export const RTTI_ImplementationGuide_Definition: t.Type<IImplementationGuide_Definition> =
  t.recursion('IImplementationGuide_Definition', () =>
    t.intersection([
      t.type({
        resource: t.array(RTTI_ImplementationGuide_Resource),
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        grouping: t.array(RTTI_ImplementationGuide_Grouping),
        page: RTTI_ImplementationGuide_Page,
        parameter: t.array(RTTI_ImplementationGuide_Parameter),
        template: t.array(RTTI_ImplementationGuide_Template),
      }),
    ]),
  );
