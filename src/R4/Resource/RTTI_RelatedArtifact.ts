import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
import {RTTI_url} from '../Scalar/RTTI_url';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
export enum RelatedArtifactTypeKind {
  _documentation = 'documentation',
  _justification = 'justification',
  _citation = 'citation',
  _predecessor = 'predecessor',
  _successor = 'successor',
  _derivedFrom = 'derived-from',
  _dependsOn = 'depends-on',
  _composedOf = 'composed-of',
}
import {createEnumType} from '../../EnumType';

export interface IRelatedArtifact {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The type of relationship to the related artifact.
   */
  type?: RelatedArtifactTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
   */
  label?: string;

  /**
   * Extensions for label
   */
  _label?: IElement;

  /**
   * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
   */
  display?: string;

  /**
   * Extensions for display
   */
  _display?: IElement;

  /**
   * A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.
   */
  citation?: string;

  /**
   * Extensions for citation
   */
  _citation?: IElement;

  /**
   * A url for the artifact that can be followed to access the actual content.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * The document being referenced, represented as an attachment. This is exclusive with the resource element.
   */
  document?: IAttachment;

  /**
   * The related resource, such as a library, value set, profile, or other knowledge resource.
   */
  resource?: string;
}

export const RTTI_RelatedArtifact: t.Type<IRelatedArtifact> = t.recursion(
  'IRelatedArtifact',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      type: createEnumType<RelatedArtifactTypeKind>(
        RelatedArtifactTypeKind,
        'RelatedArtifactTypeKind',
      ),
      _type: RTTI_Element,
      label: t.string,
      _label: RTTI_Element,
      display: t.string,
      _display: RTTI_Element,
      citation: RTTI_markdown,
      _citation: RTTI_Element,
      url: RTTI_url,
      _url: RTTI_Element,
      document: RTTI_Attachment,
      resource: RTTI_canonical,
    }),
);
