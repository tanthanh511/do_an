﻿namespace Northwind.WebApi.Authorization;

    [AttributeUsage(AttributeTargets.Method)]
    public class AllowAnonymousAttribute : Attribute
    {
    }

