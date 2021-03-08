import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
export enum ContributorTypeKind {
  _author = 'author',
  _editor = 'editor',
  _reviewer = 'reviewer',
  _endorser = 'endorser',
}
import {createEnumType} from '../../EnumType';

export interface IContributor {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The type of contributor.
   */
  type?: ContributorTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The name of the individual or organization responsible for the contribution.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  contact?: IContactDetail[];
}

export const RTTI_Contributor: t.Type<IContributor> = t.recursion(
  'IContributor',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      type: createEnumType<ContributorTypeKind>(
        ContributorTypeKind,
        'ContributorTypeKind',
      ),
      _type: RTTI_Element,
      name: t.string,
      _name: RTTI_Element,
      contact: t.array(RTTI_ContactDetail),
    }),
);
