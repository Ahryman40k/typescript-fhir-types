import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IMolecularSequence_Variant {
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
   * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  start?: number;

  /**
   * Extensions for start
   */
  _start?: IElement;

  /**
   * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  end?: number;

  /**
   * Extensions for end
   */
  _end?: IElement;

  /**
   * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
   */
  observedAllele?: string;

  /**
   * Extensions for observedAllele
   */
  _observedAllele?: IElement;

  /**
   * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
   */
  referenceAllele?: string;

  /**
   * Extensions for referenceAllele
   */
  _referenceAllele?: IElement;

  /**
   * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
   */
  cigar?: string;

  /**
   * Extensions for cigar
   */
  _cigar?: IElement;

  /**
   * A pointer to an Observation containing variant information.
   */
  variantPointer?: IReference;
}

export const RTTI_MolecularSequence_Variant: t.Type<IMolecularSequence_Variant> =
  t.recursion('IMolecularSequence_Variant', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      start: RTTI_integer,
      _start: RTTI_Element,
      end: RTTI_integer,
      _end: RTTI_Element,
      observedAllele: t.string,
      _observedAllele: RTTI_Element,
      referenceAllele: t.string,
      _referenceAllele: RTTI_Element,
      cigar: t.string,
      _cigar: RTTI_Element,
      variantPointer: RTTI_Reference,
    }),
  );
