import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_code} from '../Scalar/RTTI_code';

export interface IComposition_Section {
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
   * The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * A code identifying the kind of content contained within the section. This must be consistent with the section title.
   */
  code?: ICodeableConcept;

  /**
   * Identifies who is responsible for the information in this section, not necessarily who typed it in.
   */
  author?: IReference[];

  /**
   * The actual focus of the section when it is not the subject of the composition, but instead represents something or someone associated with the subject such as (for a patient subject) a spouse, parent, fetus, or donor. If not focus is specified, the focus is assumed to be focus of the parent section, or, for a section in the Composition itself, the subject of the composition. Sections with a focus SHALL only include resources where the logical subject (patient, subject, focus, etc.) matches the section focus, or the resources have no logical subject (few resources).
   */
  focus?: IReference;

  /**
   * A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative.
   */
  text?: INarrative;

  /**
   * How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
   */
  mode?: string;

  /**
   * Extensions for mode
   */
  _mode?: IElement;

  /**
   * Specifies the order applied to the items in the section entries.
   */
  orderedBy?: ICodeableConcept;

  /**
   * A reference to the actual resource from which the narrative in the section is derived.
   */
  entry?: IReference[];

  /**
   * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
   */
  emptyReason?: ICodeableConcept;

  /**
   * A nested sub-section within this section.
   */
  section?: IComposition_Section[];
}

export const RTTI_Composition_Section: t.Type<IComposition_Section> =
  t.recursion('IComposition_Section', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      title: t.string,
      _title: RTTI_Element,
      code: RTTI_CodeableConcept,
      author: t.array(RTTI_Reference),
      focus: RTTI_Reference,
      text: RTTI_Narrative,
      mode: RTTI_code,
      _mode: RTTI_Element,
      orderedBy: RTTI_CodeableConcept,
      entry: t.array(RTTI_Reference),
      emptyReason: RTTI_CodeableConcept,
      section: t.array(RTTI_Composition_Section),
    }),
  );
