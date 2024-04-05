// platforms
const platforms = ['Win32', 'Win16', 'SunOS', 'MacIntel', 'Linux', 'Android', 'Linux x86_64'];
Object.defineProperty(navigator, 'platform',
	{
		get: function() {
		   return platforms[Math.floor(Math.random() * platforms.length)];
		}
	}
);

// RAM
const ram = ['4', '8', '16', '32', '64'];
Object.defineProperty(navigator, 'deviceMemory',
	{
		get: function() {
			return ram[Math.floor(Math.random() * ram.length)];
		}
	}
);

// cores
const cores = ['2', '4', '6', '8', '12', '16'];
Object.defineProperty(navigator, 'hardwareConcurrency',
	{
		get: function() {
			return cores[Math.floor(Math.random() * cores.length)];
		}
	}
);

// languages
const langs = ['en-us', 'en', 'zh-ch', 'ja-jp', 'fr'];
Object.defineProperty(navigator, 'languages',
	{
		get: function() {
			return langs[Math.floor(Math.random() * langs.length)];
		}
	}
);

// timezone
const times = ['Vancouver', 'Edmonton', 'Winnipeg', 'Toronto', 'Halifax'];
Object.defineProperty(navigator, 'timeZone',
	{
		get: function() {
			return times[Math.floor(Math.random() * times.length)];
		}
	}
);