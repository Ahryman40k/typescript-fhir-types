
        import { Address } from '../Resource/Address';
import { Age } from '../Resource/Age';
import { Annotation } from '../Resource/Annotation';
import { Attachment } from '../Resource/Attachment';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { ContactDetail } from '../Resource/ContactDetail';
import { ContactPoint } from '../Resource/ContactPoint';
import { Contributor } from '../Resource/Contributor';
import { Count } from '../Resource/Count';
import { DataRequirement } from '../Resource/DataRequirement';
import { Distance } from '../Resource/Distance';
import { Dosage } from '../Resource/Dosage';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Expression } from '../Resource/Expression';
import { Extension } from '../Resource/Extension';
import { HumanName } from '../Resource/HumanName';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Integer } from '../Scalar/Integer';
import { Money } from '../Resource/Money';
import { ParameterDefinition } from '../Resource/ParameterDefinition';
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Range } from '../Resource/Range';
import { Ratio } from '../Resource/Ratio';
import { Reference } from '../Resource/Reference';
import { RelatedArtifact } from '../Resource/RelatedArtifact';
import { SampledData } from '../Resource/SampledData';
import { Signature } from '../Resource/Signature';
import { Timing } from '../Resource/Timing';
import { TriggerDefinition } from '../Resource/TriggerDefinition';
import { UsageContext } from '../Resource/UsageContext';

        export enum StructureMap_SourceListModeKind {
                first,
notFirst,
last,
notLast,
onlyOne
            }

        /**
         * A Map of relationships between 2 structures that can be used to transform data. 
         */
        export class StructureMap_Source  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Type or variable this rule applies to.
                 */
                Context? : Id;
                

                /**
                 * Extensions for context
                 */
                _context? : Element;
                

                /**
                 * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
                 */
                Min? : Integer;
                

                /**
                 * Extensions for min
                 */
                _min? : Element;
                

                /**
                 * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
                 */
                Max? : String;
                

                /**
                 * Extensions for max
                 */
                _max? : Element;
                

                /**
                 * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
                 */
                Type? : String;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueBase64Binary? : String;
                

                /**
                 * Extensions for defaultValueBase64Binary
                 */
                _defaultValueBase64Binary? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueBoolean? : Boolean;
                

                /**
                 * Extensions for defaultValueBoolean
                 */
                _defaultValueBoolean? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueCanonical? : String;
                

                /**
                 * Extensions for defaultValueCanonical
                 */
                _defaultValueCanonical? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueCode? : String;
                

                /**
                 * Extensions for defaultValueCode
                 */
                _defaultValueCode? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueDate? : String;
                

                /**
                 * Extensions for defaultValueDate
                 */
                _defaultValueDate? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueDateTime? : String;
                

                /**
                 * Extensions for defaultValueDateTime
                 */
                _defaultValueDateTime? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueDecimal? : Number;
                

                /**
                 * Extensions for defaultValueDecimal
                 */
                _defaultValueDecimal? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueId? : String;
                

                /**
                 * Extensions for defaultValueId
                 */
                _defaultValueId? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueInstant? : String;
                

                /**
                 * Extensions for defaultValueInstant
                 */
                _defaultValueInstant? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueInteger? : Number;
                

                /**
                 * Extensions for defaultValueInteger
                 */
                _defaultValueInteger? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueMarkdown? : String;
                

                /**
                 * Extensions for defaultValueMarkdown
                 */
                _defaultValueMarkdown? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueOid? : String;
                

                /**
                 * Extensions for defaultValueOid
                 */
                _defaultValueOid? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValuePositiveInt? : Number;
                

                /**
                 * Extensions for defaultValuePositiveInt
                 */
                _defaultValuePositiveInt? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueString? : String;
                

                /**
                 * Extensions for defaultValueString
                 */
                _defaultValueString? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueTime? : String;
                

                /**
                 * Extensions for defaultValueTime
                 */
                _defaultValueTime? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueUnsignedInt? : Number;
                

                /**
                 * Extensions for defaultValueUnsignedInt
                 */
                _defaultValueUnsignedInt? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueUri? : String;
                

                /**
                 * Extensions for defaultValueUri
                 */
                _defaultValueUri? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueUrl? : String;
                

                /**
                 * Extensions for defaultValueUrl
                 */
                _defaultValueUrl? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueUuid? : String;
                

                /**
                 * Extensions for defaultValueUuid
                 */
                _defaultValueUuid? : Element;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueAddress? : Address;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueAge? : Age;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueAnnotation? : Annotation;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueAttachment? : Attachment;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueCodeableConcept? : CodeableConcept;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueCoding? : Coding;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueContactPoint? : ContactPoint;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueCount? : Count;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueDistance? : Distance;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueDuration? : Duration;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueHumanName? : HumanName;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueIdentifier? : Identifier;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueMoney? : Money;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValuePeriod? : Period;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueQuantity? : Quantity;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueRange? : Range;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueRatio? : Ratio;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueReference? : Reference;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueSampledData? : SampledData;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueSignature? : Signature;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueTiming? : Timing;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueParameterDefinition? : ParameterDefinition;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueDataRequirement? : DataRequirement;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueContactDetail? : ContactDetail;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueContributor? : Contributor;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueExpression? : Expression;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueUsageContext? : UsageContext;
                

                /**
                 * A value to use if there is no existing value in the source object.
                 */
                DefaultValueDosage? : Dosage;
                

                /**
                 * Optional field for this source.
                 */
                Element? : String;
                

                /**
                 * Extensions for element
                 */
                _element? : Element;
                

                /**
                 * How to handle the list mode for this element.
                 */
                ListMode? : StructureMap_SourceListModeKind;
                

                /**
                 * Extensions for listMode
                 */
                _listMode? : Element;
                

                /**
                 * Named context for field, if a field is specified.
                 */
                Variable? : Id;
                

                /**
                 * Extensions for variable
                 */
                _variable? : Element;
                

                /**
                 * FHIRPath expression  - must be true or the rule does not apply.
                 */
                Condition? : String;
                

                /**
                 * Extensions for condition
                 */
                _condition? : Element;
                

                /**
                 * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
                 */
                Check? : String;
                

                /**
                 * Extensions for check
                 */
                _check? : Element;
                

                /**
                 * A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found.
                 */
                LogMessage? : String;
                

                /**
                 * Extensions for logMessage
                 */
                _logMessage? : Element;
                
        }
        