/*
 * Copyright 1999-2101 Alibaba Group.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.zving.framework.thirdparty.fastjson;

/**
 * @author wenshao<szujobs@hotmail.com>
 */
public enum Feature {
	/**
	 * 
	 */
	AutoCloseSource,
	/**
	 * 
	 */
	AllowComment,
	/**
	 * 
	 */
	AllowUnQuotedFieldNames,
	/**
	 * 
	 */
	AllowSingleQuotes,
	/**
	 * 
	 */
	InternFieldNames,
	/**
	 * 
	 */
	AllowISO8601DateFormat,

	/**
	 * {"a":1,,,"b":2}
	 */
	AllowArbitraryCommas,

	/**
     * 
     */
	UseBigDecimal,

	/**
	 * @since 1.1.2
	 */
	IgnoreNotMatch,

	/**
     * 
     */
	SortFeidFastMatch,

	/**
     * 
     */
	DisableASM;

	private Feature() {
		mask = 1 << ordinal();
	}

	private final int mask;

	public final int getMask() {
		return mask;
	}

	public static boolean isEnabled(int features, Feature feature) {
		return (features & feature.getMask()) != 0;
	}
}
