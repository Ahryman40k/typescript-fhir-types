
        import { Code } from '../Scalar/Code';
import { Decimal } from '../Scalar/Decimal';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Range } from '../Resource/Range';
import { Time } from '../Scalar/Time';
import { UnsignedInt } from '../Scalar/UnsignedInt';

        export enum Timing_RepeatWhenKind {
                morn,
mornEarly,
mornLate,
noon,
aft,
aftEarly,
aftLate,
eve,
eveEarly,
eveLate,
night,
phs,
hs,
wake,
c,
cm,
cd,
cv,
ac,
acm,
acd,
acv,
pc,
pcm,
pcd,
pcv
            }
export enum Timing_RepeatDurationUnitKind {
                s,
min,
h,
d,
wk,
mo,
a
            }
export enum Timing_RepeatPeriodUnitKind {
                s,
min,
h,
d,
wk,
mo,
a
            }

        /**
         * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. 
         */
        export class Timing_Repeat  {

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
                 * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
                 */
                BoundsDuration? : Duration;
                

                /**
                 * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
                 */
                BoundsRange? : Range;
                

                /**
                 * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
                 */
                BoundsPeriod? : Period;
                

                /**
                 * A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.
                 */
                Count? : PositiveInt;
                

                /**
                 * Extensions for count
                 */
                _count? : Element;
                

                /**
                 * If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.
                 */
                CountMax? : PositiveInt;
                

                /**
                 * Extensions for countMax
                 */
                _countMax? : Element;
                

                /**
                 * How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.
                 */
                Duration? : Decimal;
                

                /**
                 * Extensions for duration
                 */
                _duration? : Element;
                

                /**
                 * If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.
                 */
                DurationMax? : Decimal;
                

                /**
                 * Extensions for durationMax
                 */
                _durationMax? : Element;
                

                /**
                 * The units of time for the duration, in UCUM units.
                 */
                DurationUnit? : Timing_RepeatDurationUnitKind;
                

                /**
                 * Extensions for durationUnit
                 */
                _durationUnit? : Element;
                

                /**
                 * The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.
                 */
                Frequency? : PositiveInt;
                

                /**
                 * Extensions for frequency
                 */
                _frequency? : Element;
                

                /**
                 * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
                 */
                FrequencyMax? : PositiveInt;
                

                /**
                 * Extensions for frequencyMax
                 */
                _frequencyMax? : Element;
                

                /**
                 * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.
                 */
                Period? : Decimal;
                

                /**
                 * Extensions for period
                 */
                _period? : Element;
                

                /**
                 * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
                 */
                PeriodMax? : Decimal;
                

                /**
                 * Extensions for periodMax
                 */
                _periodMax? : Element;
                

                /**
                 * The units of time for the period in UCUM units.
                 */
                PeriodUnit? : Timing_RepeatPeriodUnitKind;
                

                /**
                 * Extensions for periodUnit
                 */
                _periodUnit? : Element;
                

                /**
                 * If one or more days of week is provided, then the action happens only on the specified day(s).
                 */
                DayOfWeek? : Array<Code>;
                

                /**
                 * Extensions for dayOfWeek
                 */
                _dayOfWeek? : Array<Element>;
                

                /**
                 * Specified time of day for action to take place.
                 */
                TimeOfDay? : Array<Time>;
                

                /**
                 * Extensions for timeOfDay
                 */
                _timeOfDay? : Array<Element>;
                

                /**
                 * An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.
                 */
                When? : Timing_RepeatWhenKind[];
                

                /**
                 * Extensions for when
                 */
                _when? : Array<Element>;
                

                /**
                 * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
                 */
                Offset? : UnsignedInt;
                

                /**
                 * Extensions for offset
                 */
                _offset? : Element;
                
        }
        