import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface ISubstanceNucleicAcid_Sugar {
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
   * The Substance ID of the sugar or sugar-like component that make up the nucleotide.
   */
  identifier?: IIdentifier;

  /**
   * The name of the sugar or sugar-like component that make up the nucleotide.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above.
   */
  residueSite?: string;

  /**
   * Extensions for residueSite
   */
  _residueSite?: IElement;
}

export const RTTI_SubstanceNucleicAcid_Sugar: t.Type<ISubstanceNucleicAcid_Sugar> =
  t.recursion('ISubstanceNucleicAcid_Sugar', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      identifier: RTTI_Identifier,
      name: t.string,
      _name: RTTI_Element,
      residueSite: t.string,
      _residueSite: RTTI_Element,
    }),
  );
