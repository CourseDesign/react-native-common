package com.coursedesign

import android.content.Context
import android.graphics.Point
import com.facebook.react.bridge.*
import android.view.ViewTreeObserver.OnGlobalLayoutListener

class SizeModule(private val context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String = "SizeModule"

    override fun getConstants(): Map<String, Any> {
        val constants: MutableMap<String, Any> = HashMap()

        constants["NAVIGATION_BAR"] = pxToDp(getNavigationBarSize(context.applicationContext))

        return constants
    }

    private fun pxToDp(pixel: Int) = pixel / context.applicationContext.resources.displayMetrics.density

    private fun getNavigationBarSize(context: Context): Int {
        val heightResId = context.resources.getIdentifier("navigation_bar_height", "dimen", "android")

        return if (heightResId > 0) context.resources.getDimensionPixelSize(heightResId) else 0
    }
}
