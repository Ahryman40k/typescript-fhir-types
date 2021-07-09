import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_integer} from '../Scalar/RTTI_integer';
export enum MolecularSequence_ReferenceSeqOrientationKind {
  _sense = 'sense',
  _antisense = 'antisense',
}
export enum MolecularSequence_ReferenceSeqStrandKind {
  _watson = 'watson',
  _crick = 'crick',
}
import {createEnumType} from '../../EnumType';

export interface IMolecularSequence_ReferenceSeq {
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
   * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
   */
  chromosome?: ICodeableConcept;

  /**
   * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
   */
  genomeBuild?: string;

  /**
   * Extensions for genomeBuild
   */
  _genomeBuild?: IElement;

  /**
   * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
   */
  orientation?: MolecularSequence_ReferenceSeqOrientationKind;

  /**
   * Extensions for orientation
   */
  _orientation?: IElement;

  /**
   * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
   */
  referenceSeqId?: ICodeableConcept;

  /**
   * A pointer to another MolecularSequence entity as reference sequence.
   */
  referenceSeqPointer?: IReference;

  /**
   * A string like "ACGT".
   */
  referenceSeqString?: string;

  /**
   * Extensions for referenceSeqString
   */
  _referenceSeqString?: IElement;

  /**
   * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
   */
  strand?: MolecularSequence_ReferenceSeqStrandKind;

  /**
   * Extensions for strand
   */
  _strand?: IElement;

  /**
   * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  windowStart?: number;

  /**
   * Extensions for windowStart
   */
  _windowStart?: IElement;

  /**
   * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  windowEnd?: number;

  /**
   * Extensions for windowEnd
   */
  _windowEnd?: IElement;
}

export const RTTI_MolecularSequence_ReferenceSeq: t.Type<IMolecularSequence_ReferenceSeq> =
  t.recursion('IMolecularSequence_ReferenceSeq', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      chromosome: RTTI_CodeableConcept,
      genomeBuild: t.string,
      _genomeBuild: RTTI_Element,
      orientation:
        createEnumType<MolecularSequence_ReferenceSeqOrientationKind>(
          MolecularSequence_ReferenceSeqOrientationKind,
          'MolecularSequence_ReferenceSeqOrientationKind',
        ),
      _orientation: RTTI_Element,
      referenceSeqId: RTTI_CodeableConcept,
      referenceSeqPointer: RTTI_Reference,
      referenceSeqString: t.string,
      _referenceSeqString: RTTI_Element,
      strand: createEnumType<MolecularSequence_ReferenceSeqStrandKind>(
        MolecularSequence_ReferenceSeqStrandKind,
        'MolecularSequence_ReferenceSeqStrandKind',
      ),
      _strand: RTTI_Element,
      windowStart: RTTI_integer,
      _windowStart: RTTI_Element,
      windowEnd: RTTI_integer,
      _windowEnd: RTTI_Element,
    }),
  );
