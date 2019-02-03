
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
import { ElementDefinition_Base } from '../Resource/ElementDefinition_Base';
import { ElementDefinition_Binding } from '../Resource/ElementDefinition_Binding';
import { ElementDefinition_Constraint } from '../Resource/ElementDefinition_Constraint';
import { ElementDefinition_Example } from '../Resource/ElementDefinition_Example';
import { ElementDefinition_Mapping } from '../Resource/ElementDefinition_Mapping';
import { ElementDefinition_Slicing } from '../Resource/ElementDefinition_Slicing';
import { ElementDefinition_Type } from '../Resource/ElementDefinition_Type';
import { Expression } from '../Resource/Expression';
import { Extension } from '../Resource/Extension';
import { HumanName } from '../Resource/HumanName';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Integer } from '../Scalar/Integer';
import { Markdown } from '../Scalar/Markdown';
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
import { UnsignedInt } from '../Scalar/UnsignedInt';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum ElementDefinitionRepresentationKind {
                xmlAttr,
xmlText,
typeAttr,
cdaText,
xhtml
            }

        /**
         * Captures constraints on each element within the resource, profile, or extension. 
         */
        export class ElementDefinition  {

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
                 * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
                 */
                Path? : String;
                

                /**
                 * Extensions for path
                 */
                _path? : Element;
                

                /**
                 * Codes that define how this element is represented in instances, when the deviation varies from the normal case.
                 */
                Representation? : ElementDefinitionRepresentationKind[];
                

                /**
                 * Extensions for representation
                 */
                _representation? : Array<Element>;
                

                /**
                 * The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.
                 */
                SliceName? : String;
                

                /**
                 * Extensions for sliceName
                 */
                _sliceName? : Element;
                

                /**
                 * If true, indicates that this slice definition is constraining a slice definition with the same name in an inherited profile. If false, the slice is not overriding any slice in an inherited profile. If missing, the slice might or might not be overriding a slice in an inherited profile, depending on the sliceName.
                 */
                SliceIsConstraining? : Boolean;
                

                /**
                 * Extensions for sliceIsConstraining
                 */
                _sliceIsConstraining? : Element;
                

                /**
                 * A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.
                 */
                Label? : String;
                

                /**
                 * Extensions for label
                 */
                _label? : Element;
                

                /**
                 * A code that has the same meaning as the element in a particular terminology.
                 */
                Code? : Array<Coding>;
                

                /**
                 * Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
                 */
                Slicing? : ElementDefinition_Slicing;
                

                /**
                 * A concise description of what this element means (e.g. for use in autogenerated summaries).
                 */
                Short? : String;
                

                /**
                 * Extensions for short
                 */
                _short? : Element;
                

                /**
                 * Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource. (Note: The text you are reading is specified in ElementDefinition.definition).
                 */
                Definition? : Markdown;
                

                /**
                 * Extensions for definition
                 */
                _definition? : Element;
                

                /**
                 * Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc. (Note: The text you are reading is specified in ElementDefinition.comment).
                 */
                Comment? : Markdown;
                

                /**
                 * Extensions for comment
                 */
                _comment? : Element;
                

                /**
                 * This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.
                 */
                Requirements? : Markdown;
                

                /**
                 * Extensions for requirements
                 */
                _requirements? : Element;
                

                /**
                 * Identifies additional names by which this element might also be known.
                 */
                Alias? : Array<String>;
                

                /**
                 * Extensions for alias
                 */
                _alias? : Array<Element>;
                

                /**
                 * The minimum number of times this element SHALL appear in the instance.
                 */
                Min? : UnsignedInt;
                

                /**
                 * Extensions for min
                 */
                _min? : Element;
                

                /**
                 * The maximum number of times this element is permitted to appear in the instance.
                 */
                Max? : String;
                

                /**
                 * Extensions for max
                 */
                _max? : Element;
                

                /**
                 * Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. When the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot - then the information in provided in the element definition may be different to the base definition. On the original definition of the element, it will be same.
                 */
                Base? : ElementDefinition_Base;
                

                /**
                 * Identifies an element defined elsewhere in the definition whose content rules should be applied to the current element. ContentReferences bring across all the rules that are in the ElementDefinition for the element, including definitions, cardinality constraints, bindings, invariants etc.
                 */
                ContentReference? : Uri;
                

                /**
                 * Extensions for contentReference
                 */
                _contentReference? : Element;
                

                /**
                 * The data type or resource that the value of this element is permitted to be.
                 */
                Type? : Array<ElementDefinition_Type>;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueBase64Binary? : String;
                

                /**
                 * Extensions for defaultValueBase64Binary
                 */
                _defaultValueBase64Binary? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueBoolean? : Boolean;
                

                /**
                 * Extensions for defaultValueBoolean
                 */
                _defaultValueBoolean? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueCanonical? : String;
                

                /**
                 * Extensions for defaultValueCanonical
                 */
                _defaultValueCanonical? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueCode? : String;
                

                /**
                 * Extensions for defaultValueCode
                 */
                _defaultValueCode? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueDate? : String;
                

                /**
                 * Extensions for defaultValueDate
                 */
                _defaultValueDate? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueDateTime? : String;
                

                /**
                 * Extensions for defaultValueDateTime
                 */
                _defaultValueDateTime? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueDecimal? : Number;
                

                /**
                 * Extensions for defaultValueDecimal
                 */
                _defaultValueDecimal? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueId? : String;
                

                /**
                 * Extensions for defaultValueId
                 */
                _defaultValueId? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueInstant? : String;
                

                /**
                 * Extensions for defaultValueInstant
                 */
                _defaultValueInstant? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueInteger? : Number;
                

                /**
                 * Extensions for defaultValueInteger
                 */
                _defaultValueInteger? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueMarkdown? : String;
                

                /**
                 * Extensions for defaultValueMarkdown
                 */
                _defaultValueMarkdown? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueOid? : String;
                

                /**
                 * Extensions for defaultValueOid
                 */
                _defaultValueOid? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValuePositiveInt? : Number;
                

                /**
                 * Extensions for defaultValuePositiveInt
                 */
                _defaultValuePositiveInt? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueString? : String;
                

                /**
                 * Extensions for defaultValueString
                 */
                _defaultValueString? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueTime? : String;
                

                /**
                 * Extensions for defaultValueTime
                 */
                _defaultValueTime? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueUnsignedInt? : Number;
                

                /**
                 * Extensions for defaultValueUnsignedInt
                 */
                _defaultValueUnsignedInt? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueUri? : String;
                

                /**
                 * Extensions for defaultValueUri
                 */
                _defaultValueUri? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueUrl? : String;
                

                /**
                 * Extensions for defaultValueUrl
                 */
                _defaultValueUrl? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueUuid? : String;
                

                /**
                 * Extensions for defaultValueUuid
                 */
                _defaultValueUuid? : Element;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueAddress? : Address;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueAge? : Age;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueAnnotation? : Annotation;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueAttachment? : Attachment;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueCodeableConcept? : CodeableConcept;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueCoding? : Coding;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueContactPoint? : ContactPoint;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueCount? : Count;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueDistance? : Distance;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueDuration? : Duration;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueHumanName? : HumanName;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueIdentifier? : Identifier;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueMoney? : Money;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValuePeriod? : Period;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueQuantity? : Quantity;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueRange? : Range;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueRatio? : Ratio;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueReference? : Reference;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueSampledData? : SampledData;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueSignature? : Signature;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueTiming? : Timing;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueParameterDefinition? : ParameterDefinition;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueDataRequirement? : DataRequirement;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueRelatedArtifact? : RelatedArtifact;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueContactDetail? : ContactDetail;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueContributor? : Contributor;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueTriggerDefinition? : TriggerDefinition;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueExpression? : Expression;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueUsageContext? : UsageContext;
                

                /**
                 * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
                 */
                DefaultValueDosage? : Dosage;
                

                /**
                 * The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing').
                 */
                MeaningWhenMissing? : Markdown;
                

                /**
                 * Extensions for meaningWhenMissing
                 */
                _meaningWhenMissing? : Element;
                

                /**
                 * If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.
                 */
                OrderMeaning? : String;
                

                /**
                 * Extensions for orderMeaning
                 */
                _orderMeaning? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedBase64Binary? : String;
                

                /**
                 * Extensions for fixedBase64Binary
                 */
                _fixedBase64Binary? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedBoolean? : Boolean;
                

                /**
                 * Extensions for fixedBoolean
                 */
                _fixedBoolean? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedCanonical? : String;
                

                /**
                 * Extensions for fixedCanonical
                 */
                _fixedCanonical? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedCode? : String;
                

                /**
                 * Extensions for fixedCode
                 */
                _fixedCode? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedDate? : String;
                

                /**
                 * Extensions for fixedDate
                 */
                _fixedDate? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedDateTime? : String;
                

                /**
                 * Extensions for fixedDateTime
                 */
                _fixedDateTime? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedDecimal? : Number;
                

                /**
                 * Extensions for fixedDecimal
                 */
                _fixedDecimal? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedId? : String;
                

                /**
                 * Extensions for fixedId
                 */
                _fixedId? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedInstant? : String;
                

                /**
                 * Extensions for fixedInstant
                 */
                _fixedInstant? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedInteger? : Number;
                

                /**
                 * Extensions for fixedInteger
                 */
                _fixedInteger? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedMarkdown? : String;
                

                /**
                 * Extensions for fixedMarkdown
                 */
                _fixedMarkdown? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedOid? : String;
                

                /**
                 * Extensions for fixedOid
                 */
                _fixedOid? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedPositiveInt? : Number;
                

                /**
                 * Extensions for fixedPositiveInt
                 */
                _fixedPositiveInt? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedString? : String;
                

                /**
                 * Extensions for fixedString
                 */
                _fixedString? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedTime? : String;
                

                /**
                 * Extensions for fixedTime
                 */
                _fixedTime? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedUnsignedInt? : Number;
                

                /**
                 * Extensions for fixedUnsignedInt
                 */
                _fixedUnsignedInt? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedUri? : String;
                

                /**
                 * Extensions for fixedUri
                 */
                _fixedUri? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedUrl? : String;
                

                /**
                 * Extensions for fixedUrl
                 */
                _fixedUrl? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedUuid? : String;
                

                /**
                 * Extensions for fixedUuid
                 */
                _fixedUuid? : Element;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedAddress? : Address;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedAge? : Age;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedAnnotation? : Annotation;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedAttachment? : Attachment;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedCodeableConcept? : CodeableConcept;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedCoding? : Coding;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedContactPoint? : ContactPoint;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedCount? : Count;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedDistance? : Distance;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedDuration? : Duration;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedHumanName? : HumanName;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedIdentifier? : Identifier;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedMoney? : Money;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedPeriod? : Period;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedQuantity? : Quantity;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedRange? : Range;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedRatio? : Ratio;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedReference? : Reference;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedSampledData? : SampledData;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedSignature? : Signature;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedTiming? : Timing;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedParameterDefinition? : ParameterDefinition;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedDataRequirement? : DataRequirement;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedRelatedArtifact? : RelatedArtifact;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedContactDetail? : ContactDetail;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedContributor? : Contributor;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedTriggerDefinition? : TriggerDefinition;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedExpression? : Expression;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedUsageContext? : UsageContext;
                

                /**
                 * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
                 */
                FixedDosage? : Dosage;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternBase64Binary? : String;
                

                /**
                 * Extensions for patternBase64Binary
                 */
                _patternBase64Binary? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternBoolean? : Boolean;
                

                /**
                 * Extensions for patternBoolean
                 */
                _patternBoolean? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternCanonical? : String;
                

                /**
                 * Extensions for patternCanonical
                 */
                _patternCanonical? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternCode? : String;
                

                /**
                 * Extensions for patternCode
                 */
                _patternCode? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternDate? : String;
                

                /**
                 * Extensions for patternDate
                 */
                _patternDate? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternDateTime? : String;
                

                /**
                 * Extensions for patternDateTime
                 */
                _patternDateTime? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternDecimal? : Number;
                

                /**
                 * Extensions for patternDecimal
                 */
                _patternDecimal? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternId? : String;
                

                /**
                 * Extensions for patternId
                 */
                _patternId? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternInstant? : String;
                

                /**
                 * Extensions for patternInstant
                 */
                _patternInstant? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternInteger? : Number;
                

                /**
                 * Extensions for patternInteger
                 */
                _patternInteger? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternMarkdown? : String;
                

                /**
                 * Extensions for patternMarkdown
                 */
                _patternMarkdown? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternOid? : String;
                

                /**
                 * Extensions for patternOid
                 */
                _patternOid? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternPositiveInt? : Number;
                

                /**
                 * Extensions for patternPositiveInt
                 */
                _patternPositiveInt? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternString? : String;
                

                /**
                 * Extensions for patternString
                 */
                _patternString? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternTime? : String;
                

                /**
                 * Extensions for patternTime
                 */
                _patternTime? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternUnsignedInt? : Number;
                

                /**
                 * Extensions for patternUnsignedInt
                 */
                _patternUnsignedInt? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternUri? : String;
                

                /**
                 * Extensions for patternUri
                 */
                _patternUri? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternUrl? : String;
                

                /**
                 * Extensions for patternUrl
                 */
                _patternUrl? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternUuid? : String;
                

                /**
                 * Extensions for patternUuid
                 */
                _patternUuid? : Element;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternAddress? : Address;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternAge? : Age;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternAnnotation? : Annotation;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternAttachment? : Attachment;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternCodeableConcept? : CodeableConcept;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternCoding? : Coding;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternContactPoint? : ContactPoint;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternCount? : Count;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternDistance? : Distance;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternDuration? : Duration;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternHumanName? : HumanName;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternIdentifier? : Identifier;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternMoney? : Money;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternPeriod? : Period;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternQuantity? : Quantity;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternRange? : Range;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternRatio? : Ratio;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternReference? : Reference;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternSampledData? : SampledData;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternSignature? : Signature;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternTiming? : Timing;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternParameterDefinition? : ParameterDefinition;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternDataRequirement? : DataRequirement;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternRelatedArtifact? : RelatedArtifact;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternContactDetail? : ContactDetail;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternContributor? : Contributor;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternTriggerDefinition? : TriggerDefinition;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternExpression? : Expression;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternUsageContext? : UsageContext;
                

                /**
                 * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
                 */
                PatternDosage? : Dosage;
                

                /**
                 * A sample value for this element demonstrating the type of information that would typically be found in the element.
                 */
                Example? : Array<ElementDefinition_Example>;
                

                /**
                 * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MinValueDate? : String;
                

                /**
                 * Extensions for minValueDate
                 */
                _minValueDate? : Element;
                

                /**
                 * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MinValueDateTime? : String;
                

                /**
                 * Extensions for minValueDateTime
                 */
                _minValueDateTime? : Element;
                

                /**
                 * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MinValueInstant? : String;
                

                /**
                 * Extensions for minValueInstant
                 */
                _minValueInstant? : Element;
                

                /**
                 * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MinValueTime? : String;
                

                /**
                 * Extensions for minValueTime
                 */
                _minValueTime? : Element;
                

                /**
                 * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MinValueDecimal? : Number;
                

                /**
                 * Extensions for minValueDecimal
                 */
                _minValueDecimal? : Element;
                

                /**
                 * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MinValueInteger? : Number;
                

                /**
                 * Extensions for minValueInteger
                 */
                _minValueInteger? : Element;
                

                /**
                 * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MinValuePositiveInt? : Number;
                

                /**
                 * Extensions for minValuePositiveInt
                 */
                _minValuePositiveInt? : Element;
                

                /**
                 * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MinValueUnsignedInt? : Number;
                

                /**
                 * Extensions for minValueUnsignedInt
                 */
                _minValueUnsignedInt? : Element;
                

                /**
                 * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MinValueQuantity? : Quantity;
                

                /**
                 * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MaxValueDate? : String;
                

                /**
                 * Extensions for maxValueDate
                 */
                _maxValueDate? : Element;
                

                /**
                 * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MaxValueDateTime? : String;
                

                /**
                 * Extensions for maxValueDateTime
                 */
                _maxValueDateTime? : Element;
                

                /**
                 * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MaxValueInstant? : String;
                

                /**
                 * Extensions for maxValueInstant
                 */
                _maxValueInstant? : Element;
                

                /**
                 * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MaxValueTime? : String;
                

                /**
                 * Extensions for maxValueTime
                 */
                _maxValueTime? : Element;
                

                /**
                 * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MaxValueDecimal? : Number;
                

                /**
                 * Extensions for maxValueDecimal
                 */
                _maxValueDecimal? : Element;
                

                /**
                 * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MaxValueInteger? : Number;
                

                /**
                 * Extensions for maxValueInteger
                 */
                _maxValueInteger? : Element;
                

                /**
                 * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MaxValuePositiveInt? : Number;
                

                /**
                 * Extensions for maxValuePositiveInt
                 */
                _maxValuePositiveInt? : Element;
                

                /**
                 * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MaxValueUnsignedInt? : Number;
                

                /**
                 * Extensions for maxValueUnsignedInt
                 */
                _maxValueUnsignedInt? : Element;
                

                /**
                 * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
                 */
                MaxValueQuantity? : Quantity;
                

                /**
                 * Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.
                 */
                MaxLength? : Integer;
                

                /**
                 * Extensions for maxLength
                 */
                _maxLength? : Element;
                

                /**
                 * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
                 */
                Condition? : Array<Id>;
                

                /**
                 * Extensions for condition
                 */
                _condition? : Array<Element>;
                

                /**
                 * Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
                 */
                Constraint? : Array<ElementDefinition_Constraint>;
                

                /**
                 * If true, implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way.  If false, the element may be ignored and not supported. If false, whether to populate or use the data element in any way is at the discretion of the implementation.
                 */
                MustSupport? : Boolean;
                

                /**
                 * Extensions for mustSupport
                 */
                _mustSupport? : Element;
                

                /**
                 * If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.
                 */
                IsModifier? : Boolean;
                

                /**
                 * Extensions for isModifier
                 */
                _isModifier? : Element;
                

                /**
                 * Explains how that element affects the interpretation of the resource or element that contains it.
                 */
                IsModifierReason? : String;
                

                /**
                 * Extensions for isModifierReason
                 */
                _isModifierReason? : Element;
                

                /**
                 * Whether the element should be included if a client requests a search with the parameter _summary=true.
                 */
                IsSummary? : Boolean;
                

                /**
                 * Extensions for isSummary
                 */
                _isSummary? : Element;
                

                /**
                 * Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).
                 */
                Binding? : ElementDefinition_Binding;
                

                /**
                 * Identifies a concept from an external specification that roughly corresponds to this element.
                 */
                Mapping? : Array<ElementDefinition_Mapping>;
                
        }
        