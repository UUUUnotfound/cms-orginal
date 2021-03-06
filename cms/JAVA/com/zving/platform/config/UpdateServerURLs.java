package com.zving.platform.config;

import com.zving.framework.Config;
import com.zving.framework.utility.ObjectUtil;
import com.zving.platform.FixedConfigItem;
import com.zving.platform.PlatformPlugin;
import com.zving.platform.code.ControlType;
import com.zving.platform.code.DataType;

/**
 * @author 王育春
 * @email wyuch@zving.com
 * @date 2011-11-24
 */
public class UpdateServerURLs extends FixedConfigItem {
	public static final String ID = "Platform.UpdateServerURLs";
	private static final String NormalUpdateServer = "http://release.update.zving.com/";
	private static final String BetaUpdateServer = "http://beta.update.zving.com/";

	public UpdateServerURLs() {
		super(ID, DataType.LargeText, ControlType.TextArea, "@{Platform.config.UpdateServerURLs}", PlatformPlugin.ID);
	}

	public static String getValue() {
		String v = Config.getValue(ID);
		if (ObjectUtil.empty(v)) {
			v = NormalUpdateServer + "\n" + BetaUpdateServer;
		} else {
			if (v.indexOf(NormalUpdateServer) < 0) {
				v += "\n" + NormalUpdateServer;
			}
			if (v.indexOf(BetaUpdateServer) < 0) {
				v += "\n" + BetaUpdateServer;
			}
		}
		return v;
	}
}
