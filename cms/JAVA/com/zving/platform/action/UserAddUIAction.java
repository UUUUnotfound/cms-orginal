package com.zving.platform.action;

import com.zving.framework.extend.ExtendException;
import com.zving.framework.extend.action.ZhtmlContext;
import com.zving.framework.extend.action.ZhtmlExtendAction;

public class UserAddUIAction extends ZhtmlExtendAction {

	@Override
	public void execute(ZhtmlContext context) throws ExtendException {
		context.write("啊撒就打算的付款就哈会计师的回复可见阿萨德离开房间");

	}

	@Override
	public boolean isUsable() {
		return true;
	}
}