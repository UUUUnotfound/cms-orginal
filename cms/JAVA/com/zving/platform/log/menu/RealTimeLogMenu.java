package com.zving.platform.log.menu;

import com.zving.platform.ILogMenu;

/**
 * @author 王育春
 * @email wyuch@zving.com
 * @date 2012-1-11
 */
public class RealTimeLogMenu implements ILogMenu {

	@Override
	public String getExtendItemID() {
		return "RealTimeLog";
	}

	@Override
	public String getExtendItemName() {
		return "@{Logs.ConsoleLog}";
	}

	@Override
	public String getDetailURL() {
		return "logs/realTime.zhtml";
	}

	@Override
	public String getGroupID() {
		return SystemGroup.ID;
	}

}
