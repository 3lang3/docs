---
sidebar_position: 1.3
---

import PlatformBasicTypes from './fragments/\_platform_basic_types.md';
import PlatformLogtoClientMethods from './fragments/\_platform_logto_client_methods.md';
import PlatformLogtoClientProperties from './fragments/\_platform_logto_client_properties.md';

# Platform SDK

Platform SDK provides a standard way to integrate the client with Logto service in the specific platform and accelerates the integration process.

- Platform SDK encapsulates [the core](./core-sdk-convention) with platform-specific implementation.
- Platform SDK should provide basic types that make SDK easier to use.
- Platform SDK should be exported as a class named `LogtoClient`.

## Basic Types

<PlatformBasicTypes />

## LogtoClient

### Properties

<PlatformLogtoClientProperties />

### Methods

<PlatformLogtoClientMethods />
