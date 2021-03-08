import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';

export interface IAnnotation {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The individual responsible for making the annotation.
   */
  authorReference?: IReference;

  /**
   * The individual responsible for making the annotation.
   */
  authorString?: string;

  /**
   * Extensions for authorString
   */
  _authorString?: IElement;

  /**
   * Indicates when this particular annotation was made.
   */
  time?: string;

  /**
   * Extensions for time
   */
  _time?: IElement;

  /**
   * The text of the annotation in markdown format.
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;
}

export const RTTI_Annotation: t.Type<IAnnotation> = t.recursion(
  'IAnnotation',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      authorReference: RTTI_Reference,
      authorString: t.string,
      _authorString: RTTI_Element,
      time: RTTI_dateTime,
      _time: RTTI_Element,
      text: RTTI_markdown,
      _text: RTTI_Element,
    }),
);
