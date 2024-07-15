"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.OperatingSystemFamily=exports.CpuArchitecture=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class CpuArchitecture{static of(cpuArchitecture){return new CpuArchitecture(cpuArchitecture)}constructor(_cpuArchitecture){this._cpuArchitecture=_cpuArchitecture}}exports.CpuArchitecture=CpuArchitecture,_a=JSII_RTTI_SYMBOL_1,CpuArchitecture[_a]={fqn:"aws-cdk-lib.aws_ecs.CpuArchitecture",version:"2.149.0"},CpuArchitecture.ARM64=CpuArchitecture.of("ARM64"),CpuArchitecture.X86_64=CpuArchitecture.of("X86_64");class OperatingSystemFamily{static of(family){return new OperatingSystemFamily(family)}constructor(_operatingSystemFamily){this._operatingSystemFamily=_operatingSystemFamily}isWindows(){return this._operatingSystemFamily?.toLowerCase().startsWith("windows")}isLinux(){return this._operatingSystemFamily?.toLowerCase().startsWith("linux")}}exports.OperatingSystemFamily=OperatingSystemFamily,_b=JSII_RTTI_SYMBOL_1,OperatingSystemFamily[_b]={fqn:"aws-cdk-lib.aws_ecs.OperatingSystemFamily",version:"2.149.0"},OperatingSystemFamily.LINUX=OperatingSystemFamily.of("LINUX"),OperatingSystemFamily.WINDOWS_SERVER_2004_CORE=OperatingSystemFamily.of("WINDOWS_SERVER_2004_CORE"),OperatingSystemFamily.WINDOWS_SERVER_2016_FULL=OperatingSystemFamily.of("WINDOWS_SERVER_2016_FULL"),OperatingSystemFamily.WINDOWS_SERVER_2019_CORE=OperatingSystemFamily.of("WINDOWS_SERVER_2019_CORE"),OperatingSystemFamily.WINDOWS_SERVER_2019_FULL=OperatingSystemFamily.of("WINDOWS_SERVER_2019_FULL"),OperatingSystemFamily.WINDOWS_SERVER_2022_CORE=OperatingSystemFamily.of("WINDOWS_SERVER_2022_CORE"),OperatingSystemFamily.WINDOWS_SERVER_2022_FULL=OperatingSystemFamily.of("WINDOWS_SERVER_2022_FULL"),OperatingSystemFamily.WINDOWS_SERVER_20H2_CORE=OperatingSystemFamily.of("WINDOWS_SERVER_20H2_CORE");
