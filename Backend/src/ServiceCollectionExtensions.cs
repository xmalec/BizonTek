using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Options;
using Microsoft.Net.Http.Headers;

namespace Web;

public static class ServiceCollectionExtensions
{
    public static void ConfigureStaticFiles(this IServiceCollection services)
    {
        var cacheControl = new CacheControlHeaderValue
        {
            Public = true,
            MaxAge = TimeSpan.FromDays(365),
            Extensions =
            {
                NameValueHeaderValue.Parse("immutable")
            }
        }.ToString();

        services.Configure<StaticFileOptions>(o =>
        {
            o.OnPrepareResponse = context =>
            {
                var query = context.Context.Request.Query;
                if (query.ContainsKey("v"))
                {
                    context.Context.Response.Headers.Append("Cache-Control", cacheControl);
                }
            };
            o.ContentTypeProvider = new FileExtensionContentTypeProvider
            {
                Mappings =
                {
                    {".avif", "image/avif"}
                }
            };
        });

        services.AddTransient(sp =>
            sp.GetRequiredService<IOptionsMonitor<StaticFileOptions>>().CurrentValue.ContentTypeProvider);
    }
}
