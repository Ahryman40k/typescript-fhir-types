# 4.0.6
- Add 2911 tests case
- Fix some enums 
- Updating R4 definition with new objects

# 4.0.5
- Fix some enums (not enought)

#4.0.4
- solve union issue with io-ts
- Add scalars that check value against regexp

# 4.0.2
- Implement FHIR Resources with io-ts
- You can now validate your json and strongly type data.  

**known limitation**
Currently an issue occurs with io-ts union that prevent the use caontained property of FHIR Resources. So for now there are deactivated.

# 4.0.1
- Fix: properties are now lowercase as FHIR spec 
- Fix: Enum generation 

# 4.0.0
- Create model for FHIR R4 Resources 
