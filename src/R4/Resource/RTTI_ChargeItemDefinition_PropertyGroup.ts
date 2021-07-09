import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {
  RTTI_ChargeItemDefinition_Applicability,
  IChargeItemDefinition_Applicability,
} from './RTTI_ChargeItemDefinition_Applicability';
import {
  RTTI_ChargeItemDefinition_PriceComponent,
  IChargeItemDefinition_PriceComponent,
} from './RTTI_ChargeItemDefinition_PriceComponent';

export interface IChargeItemDefinition_PropertyGroup {
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
   * Expressions that describe applicability criteria for the priceComponent.
   */
  applicability?: IChargeItemDefinition_Applicability[];

  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
   */
  priceComponent?: IChargeItemDefinition_PriceComponent[];
}

export const RTTI_ChargeItemDefinition_PropertyGroup: t.Type<IChargeItemDefinition_PropertyGroup> =
  t.recursion('IChargeItemDefinition_PropertyGroup', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      applicability: t.array(RTTI_ChargeItemDefinition_Applicability),
      priceComponent: t.array(RTTI_ChargeItemDefinition_PriceComponent),
    }),
  );
