import assetVersion from "../../public/version.json";

export class AssetHelper {
  static getAssetUrl = (path: string) => {
    return `${path}?v=${assetVersion.version}`;
  }
}