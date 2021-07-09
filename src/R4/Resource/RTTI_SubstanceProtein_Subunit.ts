import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';

export interface ISubstanceProtein_Subunit {
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
   * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
   */
  subunit?: number;

  /**
   * Extensions for subunit
   */
  _subunit?: IElement;

  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   */
  sequence?: string;

  /**
   * Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * Length of linear sequences of amino acids contained in the subunit.
   */
  length?: number;

  /**
   * Extensions for length
   */
  _length?: IElement;

  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
   */
  sequenceAttachment?: IAttachment;

  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  nTerminalModificationId?: IIdentifier;

  /**
   * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.
   */
  nTerminalModification?: string;

  /**
   * Extensions for nTerminalModification
   */
  _nTerminalModification?: IElement;

  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
   */
  cTerminalModificationId?: IIdentifier;

  /**
   * The modification at the C-terminal shall be specified.
   */
  cTerminalModification?: string;

  /**
   * Extensions for cTerminalModification
   */
  _cTerminalModification?: IElement;
}

export const RTTI_SubstanceProtein_Subunit: t.Type<ISubstanceProtein_Subunit> =
  t.recursion('ISubstanceProtein_Subunit', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      subunit: RTTI_integer,
      _subunit: RTTI_Element,
      sequence: t.string,
      _sequence: RTTI_Element,
      length: RTTI_integer,
      _length: RTTI_Element,
      sequenceAttachment: RTTI_Attachment,
      nTerminalModificationId: RTTI_Identifier,
      nTerminalModification: t.string,
      _nTerminalModification: RTTI_Element,
      cTerminalModificationId: RTTI_Identifier,
      cTerminalModification: t.string,
      _cTerminalModification: RTTI_Element,
    }),
  );
